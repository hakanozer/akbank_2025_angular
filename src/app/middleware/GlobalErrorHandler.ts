import { ErrorHandler, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Api } from "../services/api";

export class GlobalErrorHandler implements ErrorHandler { 

    private readonly router = inject(Router);
    private readonly api = inject(Api);

    handleError(error: any) {
        const url = this.router.url;
        console.error('Global Error Handler:', url, error);
        // redirect to error page
        // this.router.navigate(['/error'], { queryParams: { returnUrl: url } });
    }


}
