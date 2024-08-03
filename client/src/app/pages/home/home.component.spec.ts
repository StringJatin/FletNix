import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpMock: HttpTestingController;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with token and fetch movie list', () => {
    const token = 'sample-token';
    spyOn(localStorage, 'getItem').and.returnValue(token);
    spyOn(component, 'getMovieList').and.callThrough();

    component.ngOnInit();

    expect(localStorage.getItem).toHaveBeenCalledWith('token');
    expect(component.getMovieList).toHaveBeenCalledWith(1, '', '');
  });




  it('should change category and reset page', () => {
    spyOn(component, 'getMovieList').and.callThrough();
    const selectEvent = { target: { value: 'TV Show' } };

    component.onCategoryChange(selectEvent);

    expect(component.selectedCategory).toBe('TV Show');
    expect(component.page).toBe(1);
    expect(component.getMovieList).toHaveBeenCalledWith(1, '', '');
  });

  it('should handle page change and scroll to top', () => {
    spyOn(component, 'getMovieList').and.callThrough();
    spyOn(window, 'scrollTo');

    component.changePage(2);

    expect(component.page).toBe(2);
    expect(component.getMovieList).toHaveBeenCalledWith(2, '', '');
  });

  it('should return correct page numbers for pagination', () => {
    component.page = 3;
    const pageNumbers = component.getPageNumbers();

    expect(pageNumbers).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle navigation tab clicks and update type', () => {
    spyOn(component, 'getMovieList').and.callThrough();
    const tab = 'Movie';

    component.handleNavtabClick(tab);

    expect(component.type).toBe(tab);
    expect(component.page).toBe(1);
    expect(component.getMovieList).toHaveBeenCalledWith(1, tab, component.searchQuery);
  });


});
