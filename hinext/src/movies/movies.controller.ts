import { Controller, Delete, Get, Param, Post, Patch, Body, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies')  // 이 부분 때문에 localhost:3000/movies 파일이 됨. router 같은 거임. 
export class MoviesController {

    constructor(readonly moviesService: MoviesService) {}  // 이거 덕분에 this.moviesService.getAll를 쓸 수 있음. 

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }
    
    @Get("/search")
    search(@Query('year') searchYear: string){
        return `We are searching for a movie with a title: ${searchYear}`;
    }

    @Get("/:id") 
    getOne(@Param("id") movieId: number): Movie{  //@parm("id")는 위에 아이디와 같아야 하나 뒤에 오는 것은 달라도 됨. 
        return this.moviesService.getOne(movieId)
    }

    @Post() 
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') movieId: number) {
        return this.moviesService.deleteOne(movieId);
    } 

    @Patch("/:id") // patch는 리소스의 일부분만 업데이트 해준다. 
    patch(@Param('id') movieId: number, @Body() updateData:UpdateMovieDto) {
        return this.moviesService.update(movieId, updateData);
    }
}
