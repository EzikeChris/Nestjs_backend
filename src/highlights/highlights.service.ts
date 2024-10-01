import { Injectable, NotFoundException } from '@nestjs/common';
import { IHighlight } from './highlight.interface';

@Injectable()
export class HighlightsService {
  private highlights: IHighlight[] = [];
  private idCounter = 1;

  create(highlight: Omit<IHighlight, 'id'>): IHighlight {
    const newHighlight = { id: this.idCounter++, ...highlight };
    this.highlights.push(newHighlight);
    return newHighlight;
  }

  findAll(): IHighlight[] {
    return this.highlights;
  }

  findOne(id: number): IHighlight {
    const item = this.highlights.find(highlight => highlight.id == id);
    if (!item) {
      throw new NotFoundException(`Highlight with ID ${id} not found`);
    }
    return item;
  }

  update(id: number, highlight: Partial<IHighlight>): IHighlight {
    const index = this.highlights.findIndex(highlight => highlight.id == id);
    if (index === -1) {
      throw new NotFoundException(`Highlight with ID ${id} not found`);
    }
    this.highlights[index] = { ...this.highlights[index], ...highlight };
    return this.highlights[index];
  }

  delete(id: number): void {
    const index = this.highlights.findIndex(highlight => highlight.id == id);
    if (index === -1) {
      throw new NotFoundException(`Highlight with ID ${id} not found`);
    }
    this.highlights.splice(index, 1);
  }
}
