
/* This interceptor  intercepts all HTTP request and responses */
import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       return next.handle(request).pipe(
           catchError(err => throwError(this.errorHandler(err))
        ),
      )
    }

    errorHandler(error: HttpErrorResponse) {
      switch (error.status) {
        case 404: {
            return alert(`Not Found: The resource you are searching for does not exist`);
        }
        case 403: {
            return `Access Denied: ${error.message}`;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return alert(`Unknown Server Error: ${error.message}`);
        }
    }
    }
}


