import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { EmployeeInfo } from './employee-info.model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-oneOf-complete',
    templateUrl: './one-of-complete.component.html'
})
export class OneOfCompleteComponent implements OnInit {
    employeeInfoFormGroup: FormGroup

    selectedQualifications: string[] = [];
    selectedSkills: string[] = [];
    selectedHobbies: string[] = [];
    selectedProjectDomains : string[] = [];

    constructor(
        private formBuilder: RxFormBuilder, private http: HttpClient) { }

    qualificationsArray: string[] = [];
    skillsArray: string[] = [];
    hobbiesArray: string[] = [];
    projectDomainsArray : string[] = [];

    ngOnInit() {
        let employeeInfo = new EmployeeInfo();
        this.http.get("assets/examples/reactive-form-validators/decorators/oneOf/complete/one-of.json").subscribe(response => {
            this.qualificationsArray = response['qualificationsArray'];
            this.skillsArray = response['skillsArray'];
            this.hobbiesArray = response['hobbiesArray'];
            this.projectDomainsArray = response['projectDomainsArray'];
        })

        this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo);
    }

    addProjectDomain(element: any, index: number) {
        element.checked ? this.selectedProjectDomains.push(element.value) : this.selectedProjectDomains.splice(index, 1);
        this.employeeInfoFormGroup.controls.projects.setValue(this.selectedProjectDomains);
    }

    addQualification(element: any, index: number) {
        element.checked ? this.selectedQualifications.push(element.value) : this.selectedQualifications.splice(index, 1);
        this.employeeInfoFormGroup.controls.qualifications.setValue(this.selectedQualifications);
    }
    
    addSkill(element: any, index: number) {
        element.checked ? this.selectedSkills.push(element.value) : this.selectedSkills.splice(index, 1);
        this.employeeInfoFormGroup.controls.skills.setValue(this.selectedSkills);
    }
    
    addHobby(element: any, index: number) {
        element.checked ? this.selectedHobbies.push(element.value) : this.selectedHobbies.splice(index, 1);
        this.employeeInfoFormGroup.controls.hobbies.setValue(this.selectedHobbies);
    }
}
