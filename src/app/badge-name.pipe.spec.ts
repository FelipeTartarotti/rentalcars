import { BadgeNamePipe } from "./../app/badge-name.pipe";
describe('Pipe: BadgeNamePipe', () => {
  it('should return City', () => {
    let namePipe = new BadgeNamePipe();
    expect(namePipe.transform('city')).toEqual('City');
  });

});
