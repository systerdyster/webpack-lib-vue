import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    name: 'HeroHeader',
    template: require('./HeroHeader.pug')
})
export class HeroHeader extends Vue {
    public greeting: string = 'kaxxa';

    public created() {
        console.log('Yoooolo.');
    }
}
