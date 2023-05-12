import { Component, OnInit, Input } from '@angular/core';
import { FlashCardService } from '../../../core/service/flash-card.service';
import { Profile } from '../profile/profile';
import { takeUntilDestroy } from 'src/shared/take-until-destroy';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-flash-card-create',
  templateUrl: './flash-card-create.component.html',
  styleUrls: ['./flash-card-create.component.css']
})
export class FlashCardCreateComponent implements OnInit {
  saveCardForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private flashCardService: FlashCardService

  ) {
  }

  ngOnInit() {
    this.saveCardForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      gitHubUrl: new FormControl('', Validators.required),
      linkedinUrl: new FormControl('', Validators.required),

    })
  }

  saveCard(): void {
    if (this.saveCardForm.valid) {
      const body = this.saveCardForm.value;

      debugger;
      console.log(body);

      this.flashCardService.post(body, '/save').subscribe(res => {
        this.clearFields();
      });
    } else {
      console.log("form invalid!")

    }
  }

  clearFields(): void {
    this.saveCardForm.reset();
  }

  ngOnDestroy() { }
}
