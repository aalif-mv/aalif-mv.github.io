class Scroll {
    constructor(id) {
        this.element = document.querySelector('[uScrId="'+ id +'"]').children[1];
        this.scrollPos = 0;
        this.width = this.element.clientWidth;
        this.MaxScrollWidth = this.element.scrollWidth;
        this.cardWidth = this.element.children[0].clientWidth;
        console.log(this, '[uScrId="'+ id +'"]');
        window.addEventListener('resize', () => {this.handleResize(this)})
        this.set()
    }
    left() {
        this.scrollPos -= (this.width - this.cardWidth)-10*(this.width/this.cardWidth);
        this.set()
    }
    right() {
        this.scrollPos += (this.width - this.cardWidth)-10*(this.width/this.cardWidth);
        this.set()
    }
    set() {
        if (this.scrollPos <= 0) {
            this.scrollPos = 0;
            this.element.parentElement.children[2].style.display = 'none';
        }
        if (this.scrollPos < this.MaxScrollWidth) {
            this.element.parentElement.children[3].style.display = 'inline-block';
        }
        if (this.scrollPos >= this.MaxScrollWidth) {
            this.scrollPos = this.MaxScrollWidth;
            this.element.parentElement.children[3].style.display = 'none';
        }
        if (this.scrollPos > 0) {
            this.element.parentElement.children[2].style.display = 'inline-block';
        }
        this.element.scrollLeft = this.scrollPos;
    }
    handleResize(self) {
        self.width = self.element.clientWidth;
        self.scrollPos = self.element.scrollLeft;
    }
}

const scroller = {
    '#SC001': new Scroll('#SC001'),
};