import { CoolStory } from './coolstory';
class CoolStoryServiceDef {

    private coolStory: CoolStory;

    constructor(){
        this.coolStory = new CoolStory();
    }

    public superCoolStory() {
        return this.coolStory.isCoolStory({bro: true});
    }
}


export const CoolStoryService = new CoolStoryServiceDef();