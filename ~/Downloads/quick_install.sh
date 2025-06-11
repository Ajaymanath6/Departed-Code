#!/bin/bash

echo "Installing Cursor AI IDE 0.50.5..."

# Kill any running cursor processes
pkill -f cursor 2>/dev/null || true

# Create installation directory
sudo mkdir -p /opt/cursor

# Copy and setup the AppImage
sudo cp ~/Downloads/cursor-0.50.5-linux.AppImage /opt/cursor/cursor.AppImage
sudo chmod +x /opt/cursor/cursor.AppImage

# Create desktop entry
sudo tee /usr/share/applications/cursor.desktop > /dev/null << EOF
[Desktop Entry]
Name=Cursor AI IDE
Comment=AI-powered code editor
Exec=/opt/cursor/cursor.AppImage --no-sandbox %F
Icon=/opt/cursor/cursor.png
Type=Application
StartupWMClass=Cursor
Categories=Development;IDE;TextEditor;
Terminal=false
EOF

# Download icon
sudo wget -q -O /opt/cursor/cursor.png https://www.cursor.com/apple-touch-icon.png 2>/dev/null || echo "Icon download skipped"

# Create command line launcher
sudo ln -sf /opt/cursor/cursor.AppImage /usr/local/bin/cursor

# Update desktop database
sudo update-desktop-database /usr/share/applications/ 2>/dev/null || true

echo "Cursor AI IDE 0.50.5 installed successfully!"
echo "You can now:"
echo "- Find 'Cursor AI IDE' in your applications menu"
echo "- Run 'cursor' from terminal"
echo "- Run 'cursor /path/to/project' to open a project"