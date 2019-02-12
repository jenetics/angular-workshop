import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieName = '';
  movieCategory = '';
  movies: MovieEntry[] = [];

  selectedMovieIndex = -1;

  movieCategories = [
    'SF', 'Fiction', 'Non-fiction'
  ];

  constructor() {}
  ngOnInit() {}

  addMovie() {
    this.movies.push({
      watched: false,
      name: this.movieName,
      category: this.movieCategory
    });
  }

  removeMovie(index: number) {
    this.movies.splice(index, 1);
  }

  editMovie(index: number) {
    this.selectedMovieIndex = index;
    this.movieName = this.movies[index].name;
    this.movieCategory = this.movies[index].category;
  }

  updateMovie() {
    this.movies[this.selectedMovieIndex].name = this.movieName;
    this.movies[this.selectedMovieIndex].category = this.movieCategory;
    this.selectedMovieIndex = -1;
    this.movieName = '';
  }

}

interface MovieEntry {
  watched: boolean;
  name: string;
  category: string;
}

