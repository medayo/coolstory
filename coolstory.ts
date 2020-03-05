import { ICoolStory } from './coolstory2';
export class CoolStory{

    public coolStory(): boolean{
        return true;
    }

    public isCoolStory(bro: ICoolStory): string{
        if(bro.bro){
            return 'Was a cool story';
        } else {
            return 'Not a cool story';
        }
    }
}