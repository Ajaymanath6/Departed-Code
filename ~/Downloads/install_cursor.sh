#!/bin/bash

# Cursor AI IDE Installation & Update Script
# This script installs or updates Cursor AI IDE to the latest version (0.50.5)

set -e # Exit on error

# Text formatting
BOLD="\033[1m"
GREEN="\033[0;32m"
BLUE="\033[0;34m"
RED="\033[0;31m"
RESET="\033[0m"

echo -e "${BOLD}${GREEN}===== Cursor AI IDE Installation & Update Script =====${RESET}"
echo -e "This script will install/update Cursor AI IDE to version 0.50.5"
echo ""

# Configuration
APPIMAGE_PATH="/opt/cursor/cursor.AppImage"
ICON_PATH="/opt/cursor/cursor.png"
DESKTOP_ENTRY_PATH="/usr/share/applications/cursor.desktop"
ICON_URL="https://www.cursor.com/apple-touch-icon.png"
CURRENT_APPIMAGE="$HOME/Downloads/cursor-0.50.5-linux.AppImage"

# Check if we have the downloaded AppImage
if [ ! -f "$CURRENT_APPIMAGE" ]; then
    echo -e "${RED}Error: cursor-0.50.5-linux.AppImage not found in Downloads folder${RESET}"
    echo "Please ensure the AppImage is downloaded first."
    exit 1
fi

echo -e "${BLUE}Found Cursor AppImage: $CURRENT_APPIMAGE${RESET}"

# Check if Cursor is currently running
if pgrep -f "cursor" > /dev/null; then
    echo -e "${RED}Warning: Cursor is currently running.${RESET}"
    echo "Please close all instances of Cursor AI IDE before continuing."
    read -p "Press Enter when you've closed Cursor, or Ctrl+C to cancel..."
fi

# Create installation directory
echo -e "${BLUE}Creating installation directory...${RESET}"
sudo mkdir -p "$(dirname "$APPIMAGE_PATH")"

# Install/Update Cursor AppImage
echo -e "${BLUE}Installing Cursor AppImage to /opt/cursor/...${RESET}"
sudo cp "$CURRENT_APPIMAGE" "$APPIMAGE_PATH"
sudo chmod +x "$APPIMAGE_PATH"

# Download and install icon
echo -e "${BLUE}Downloading Cursor icon...${RESET}"
sudo wget -q -O "$ICON_PATH" "$ICON_URL" || echo "Warning: Could not download icon"

# Create desktop entry
echo -e "${BLUE}Creating desktop entry...${RESET}"
sudo tee "$DESKTOP_ENTRY_PATH" > /dev/null << EOF
[Desktop Entry]
Name=Cursor AI IDE
Comment=AI-powered code editor
Exec=$APPIMAGE_PATH --no-sandbox %F
Icon=$ICON_PATH
Type=Application
StartupWMClass=Cursor
Categories=Development;IDE;TextEditor;
MimeType=text/plain;inode/directory;
Keywords=cursor;code;editor;ai;development;programming;
Terminal=false
EOF

# Create symbolic link for command line access
echo -e "${BLUE}Creating command-line launcher...${RESET}"
sudo ln -sf "$APPIMAGE_PATH" "/usr/local/bin/cursor"

# Add to PATH if not already there
if ! echo "$PATH" | grep -q "/usr/local/bin"; then
    echo -e "${BLUE}Adding /usr/local/bin to PATH...${RESET}"
    echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bashrc
fi

# Update desktop database
echo -e "${BLUE}Updating desktop database...${RESET}"
sudo update-desktop-database /usr/share/applications/ 2>/dev/null || true

# Create update script for future use
echo -e "${BLUE}Creating update script...${RESET}"
sudo tee "/opt/cursor/update-cursor.sh" > /dev/null << 'EOF'
#!/bin/bash
# Cursor Update Script
API_URL="https://www.cursor.com/api/download?platform=linux-x64&releaseTrack=stable"
DOWNLOAD_URL=$(curl -s "$API_URL" | grep -o '"downloadUrl":"[^"]*"' | cut -d'"' -f4)
TEMP_FILE="/tmp/cursor-latest.AppImage"

echo "Checking for Cursor updates..."
if [ -n "$DOWNLOAD_URL" ]; then
    echo "Downloading latest version..."
    wget -q -O "$TEMP_FILE" "$DOWNLOAD_URL"
    
    if [ $? -eq 0 ]; then
        echo "Installing update..."
        chmod +x "$TEMP_FILE"
        sudo mv "$TEMP_FILE" "/opt/cursor/cursor.AppImage"
        echo "Cursor has been updated successfully!"
    else
        echo "Failed to download update."
        rm -f "$TEMP_FILE"
    fi
else
    echo "Could not get download URL."
fi
EOF

sudo chmod +x "/opt/cursor/update-cursor.sh"

# Clean up
echo -e "${BLUE}Cleaning up...${RESET}"
rm -f "$CURRENT_APPIMAGE"

echo -e "${BOLD}${GREEN}===== Installation Complete! =====${RESET}"
echo -e "Cursor AI IDE 0.50.5 has been successfully installed!"
echo -e ""
echo -e "${BOLD}How to use:${RESET}"
echo -e "• Find 'Cursor AI IDE' in your applications menu"
echo -e "• Run 'cursor' from the terminal"
echo -e "• Run 'cursor /path/to/project' to open a specific project"
echo -e ""
echo -e "${BOLD}To update in the future:${RESET}"
echo -e "• Run: sudo /opt/cursor/update-cursor.sh"
echo -e ""
echo -e "${BOLD}${GREEN}Enjoy coding with Cursor AI!${RESET}" 