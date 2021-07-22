import { Controller, Delete, Get, Param, Post, Patch, Body, Query } from '@nestjs/common';

@Controller('movies')  // 이 부분 때문에 localhost:3000/movies 파일이 됨. router 같은 거임. 
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all movies";
    }
    
    @Get("/search")
    search(@Query('year') searchYear: string){
        return `We are searching for a movie with a title: ${searchYear}`;
    }

    @Get("/:id") 
    getOne(@Param("id") movieId: string){  //@parm("id")는 위에 아이디와 같아야 하나 뒤에 오는 것은 달라도 됨. 
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post() 
    create(@Body() movieData) {
        console.log(movieData);
        return movieData;
    }

    @Delete("/:id")
    delete(@Param('id') movieId: string) {
        return `Thie will delete a movie with id ${movieId}`;
    } 

    @Patch("/:id") // patch는 리소스의 일부분만 업데이트 해준다. 
    patch(@Param('id') movieId: string, @Body() updateData) {
        return {
            updataedMovie: movieId, 
            ...updateData,
        }
    }
}
