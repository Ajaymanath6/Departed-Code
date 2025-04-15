import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface EstimationResult {
  totalCost: number;
  breakdown: { step: string; cost: number }[];
  isOverLimit: boolean;
}

@Component({
  selector: 'app-costestimation',
  templateUrl: './costestimation.component.html',
  styleUrls: ['./costestimation.component.scss']
})
export class CostestimationComponent {
  costForm: FormGroup;
  isLoading = false;
  showResult = false;
  estimationResult: EstimationResult | null = null;
  currentStep = 0;

  steps = [
    'Initial Assessment',
    'Document Review',
    'Legal Research',
    'Client Consultation',
    'Case Strategy Development',
    'Filing Preparation'
  ];

  stepDescriptions = [
    'Evaluate case merit and potential outcomes',
    'Analyze and organize case documentation',
    'Study relevant laws and precedents',
    'Meet with client to gather information',
    'Develop comprehensive case strategy',
    'Prepare necessary legal documents'
  ];

  stepWeights = [0.15, 0.2, 0.25, 0.1, 0.2, 0.1]; // Weights for cost distribution

  constructor(private fb: FormBuilder) {
    this.costForm = this.fb.group({
      name: ['', Validators.required],
      estimatedCost: ['', [Validators.required, Validators.min(0)]],
      limit: ['', [Validators.required, Validators.min(0)]]
    });
  }

  getStepDescription(index: number): string {
    return this.stepDescriptions[index];
  }

  isStepComplete(index: number): boolean {
    return this.showResult && index <= this.currentStep;
  }

  isStepActive(index: number): boolean {
    return this.showResult && index === this.currentStep;
  }

  calculateEstimation(): EstimationResult {
    const estimatedCost = parseFloat(this.costForm.get('estimatedCost')?.value || '0');
    const limit = parseFloat(this.costForm.get('limit')?.value || '0');

    const breakdown = this.steps.map((step, index) => ({
      step,
      cost: estimatedCost * this.stepWeights[index]
    }));

    return {
      totalCost: estimatedCost,
      breakdown,
      isOverLimit: estimatedCost > limit
    };
  }

  async onSubmit() {
    if (this.costForm.valid) {
      this.isLoading = true;
      this.showResult = false;
      this.currentStep = 0;

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        this.estimationResult = this.calculateEstimation();
        this.showResult = true;

        // Animate through steps
        for (let i = 0; i < this.steps.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 800));
          this.currentStep = i;
        }
      } catch (error) {
        console.error('Error calculating estimation:', error);
      } finally {
        this.isLoading = false;
      }
    }
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  }
}
