#2.0 generate 커맨드 라인으로 nestjs의 거의 모든 걸 생성할 수 있다. 
     새로운 컨트롤러를 만들 거면 npm g co 라고 친다음에 컨트롤러 이름을 만들면 됨. 
     이렇게 하면 자동으로 app.modules 파일에 import 시켜줌. 
     spec 파일은 테스트 파일이라 지워도 됨. 

#2.2 만약 create를 해서 결과값을 받고 싶다면 Decorator를 활용하면 된다. 
     만약 get으로 인자를 받을 거면 get 중에 맨 아래로 써줘야 한다. 
     아니면 그 인자값이 다들어간다고 생각하고 의도치 않게 인자를 요구하게 된다. 
     @Get("/search")에서 @Query는 ~/movies/search/year=3000 같은 거고
     @Get("/:id")는 ~/movies/search/1 같은 거다. 