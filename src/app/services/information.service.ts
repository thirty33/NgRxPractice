import {Injectable} from '@angular/core';
import { 	catchError, map, tap } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

const httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		observe : 'response'
};

@Injectable({
    providedIn: 'root'
})

export class InformationService {

    constructor(private http: HttpClient) {
    }

    getPaymentItems(): Observable<HttpResponse<Object[]>> {
			const url = 'http://localhost/admin/frontend/web/index.php/consult-agp/consulta-historico-pagos';
			return this.http.post<any>(url, httpOptions)
				.pipe(
					tap(_ => console.log('fetched paymentItems')),
					catchError(this.handleError)
				);
    }

    private handleError(error:HttpErrorResponse) {
			if(error.error instanceof ErrorEvent) {
				console.log('an error ocurred', error.error.message);
			}
			else {
				console.log('Backend error', error.status);
				console.log('client side error', error.error);
			}
			return throwError(
				'Smething wrong' + error.error
			);
    }
	}