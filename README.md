#2.0 generate 커맨드 라인으로 nestjs의 거의 모든 걸 생성할 수 있다. 
     새로운 컨트롤러를 만들 거면 npm g co 라고 친다음에 컨트롤러 이름을 만들면 됨. 
     이렇게 하면 자동으로 app.modules 파일에 import 시켜줌. 
     spec 파일은 테스트 파일이라 지워도 됨. 

#2.1 만약 create를 해서 결과값을 받고 싶다면 Decorator를 활용하면 된다. 
     만약 get으로 인자를 받을 거면 get 중에 맨 아래로 써줘야 한다. 
     아니면 그 인자값이 다들어간다고 생각하고 의도치 않게 인자를 요구하게 된다. 
     @Get("/search")에서 @Query는 ~/movies/search/year=3000 같은 거고
     @Get("/:id")는 ~/movies/search/1 같은 거다. 

#2.2 Single-responsibility principle 원칙에 따라 작업을 해야한다. 이 것은 하나의 module, class 혹은 function이 꼭 하나의 기능만을 수행해야 하는 것이다. 
     nest g s 를 통해서 서비스를 만들 수 있음.  이렇게 하면 자동으로 프로바이더에 import 시켜줌.
     entities 폴더의 entities 파일들은 서비스로 보내고 받을 클래스(인터페이스)를 export 하는 부분이다. 

#2.4 updateData랑 movieData한테 타입을 부여하기 위해서 서비스랑 콘트롤러에 DTO(데이터 전송 객체)를 만들어야 한다. 
     dto는 타입을 정의해놓는 것이다. 

#2.5 PartialType는 인자값으로 기본 틀이되는 것을 요구한다. 