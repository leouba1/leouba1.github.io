import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CustomerCardComponent } from "./customer-card.component";

describe('CustomerCardComponent', () => {
    let component: CustomerCardComponent;
    let fixture: ComponentFixture<CustomerCardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [CustomerCardComponent]});
        fixture = TestBed.createComponent(CustomerCardComponent);
        component = fixture.componentInstance;
    });

    it("Should create component", () => {
        expect(component).toBeDefined();
    });
});