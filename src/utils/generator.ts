import { dictionary, Dictionary } from '../data/dictionary';

export class TugaGenerator {
    private data: Dictionary;

    constructor() {
        this.data = dictionary;
    }

    generate(numParagraphs: number, intensity: number): string[] {
        const paragraphs: string[] = [];
        for (let i = 0; i < numParagraphs; i++) {
            paragraphs.push(this.createParagraph(intensity));
        }
        return paragraphs;
    }

    private createParagraph(intensity: number): string {
        const numSentences = Math.floor(Math.random() * 4) + 3; // 3 to 6 sentences
        let paragraph = "";
        
        // Create a temporary copy of data to avoid repetition within paragraph
        let tempData = JSON.parse(JSON.stringify(this.data));

        for (let i = 0; i < numSentences; i++) {
            paragraph += this.createSentence(intensity, tempData) + " ";
        }

        return paragraph.trim();
    }

    private createSentence(intensity: number, tempData: Dictionary): string {
        const isComplex = Math.random() > 0.5;
        const useSlang = (intensity / 100) > Math.random();
        
        let sentence = "";
        
        // 1. Intro
        if (Math.random() > 0.3) {
            sentence += this.getRandomAndRemove(tempData.intros) + " ";
        }

        // 2. Core Sentence
        sentence += this.buildCoreSentence(useSlang, tempData);

        // 3. Connector + Second part
        if (isComplex) {
            sentence += " " + this.getRandomAndRemove(tempData.connectors) + " " + this.buildCoreSentence(useSlang, tempData);
        }

        // 4. Ending
        if (Math.random() < (intensity / 100)) {
            sentence += this.getRandomAndRemove(tempData.endings);
        } else {
            sentence += ".";
        }

        // Capitalize first letter
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        
        return sentence;
    }

    private buildCoreSentence(useSlang: boolean, tempData: Dictionary): string {
        let s = this.getRandomAndRemove(tempData.subjects) + " ";
        
        if (useSlang && Math.random() > 0.5) {
            s += this.getRandomAndRemove(tempData.slang) + " "; 
        }
        
        s += this.getRandomAndRemove(tempData.actions) + " ";
        s += this.getRandomAndRemove(tempData.complements);
        
        return s;
    }

    private getRandomAndRemove(arr: string[]): string {
        if (!arr || arr.length === 0) {
            return ""; 
        }
        const index = Math.floor(Math.random() * arr.length);
        const item = arr[index];
        arr.splice(index, 1); // Remove used item
        return item;
    }
}

export const generator = new TugaGenerator();
