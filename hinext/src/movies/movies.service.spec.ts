import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("should be 4", () => {    // it이라고 한 다음에 이름 적어주고 
    expect(2+2).toEqual(4);    // expect는 검사할 모듈이나 함수 등을 적는 곳 
  });

  describe("getAll",()=> {
    it("sholud return a array" ,() =>{
      
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });
});
