import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { HexcolorInfo } from './hexcolor-info.model';

@Component({
    selector: 'app-hexColor-conditionalExpression-template-driven-validation-directives',
    templateUrl: './hex-color-conditional-expression.component.html'
})
export class HexColorConditionalExpressionTemplateDrivenValidationDirectivesComponent implements OnInit {
    hexcolorinfo: HexcolorInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.hexcolorinfo= new HexcolorInfo()
    }
}
