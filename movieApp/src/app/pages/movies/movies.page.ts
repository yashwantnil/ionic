import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
movies : any = { data:[] };

currentPage = 1;

  constructor(private movieService: MovieService,private loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    this.loadMovies();
  
}
async loadMovies()
{
  const loading = await this.loadingCtrl.create({
    message:'Loading..',
    spinner:'bubbles',
  });
  await loading.present();
  this.movieService.getTopRatedMovies().subscribe((res=>{
    loading.dismiss();
    this.movies = res;
    console.log(res);
        }));
}
  }

