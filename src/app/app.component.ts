import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,CommonModule],
  providers: [ApiserviceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  message: string = 'Loading...'; // Başlangıçta bir mesaj

  constructor(private apiService: ApiserviceService) {}

  ngOnInit(): void {
    this.apiService.getHelloMessage().subscribe(
      (data: string) => this.message = data, // Veriyi ekrana yazdır
      (error: any) => this.message = 'Error occurred!' // Hata durumunda mesaj göster
    );
  }
}