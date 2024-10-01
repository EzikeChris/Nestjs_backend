import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { HighlightsService } from './highlights.service';
import { IHighlight, IHighlightResponse } from './highlight.interface';

@Controller('highlights')
export class HighlightsController {
  constructor(private readonly highlightsService: HighlightsService) {}

  @Post()
  create(@Body() highlight: Omit<IHighlight, 'id'>): IHighlightResponse {
    const createdHighlight = this.highlightsService.create(highlight);
    return {
        message: 'successful',
        data: createdHighlight
    }
  }

  @Get()
  findAll(): IHighlightResponse {
    const highlights = this.highlightsService.findAll();
    return {
        message: 'successful',
        data: highlights
    }
  }

  @Get(':id')
  findOne(@Param('id') id: number): IHighlightResponse {
    const highlight = this.highlightsService.findOne(id);
    return {
        message: 'successful',
        data: highlight
    }
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() highlight: Partial<IHighlight>): IHighlightResponse {
    const updatedHighlight = this.highlightsService.update(id, highlight);
    return {
        message: 'successful',
        data: updatedHighlight
    }
  }

  @Delete(':id')
  delete(@Param('id') id: number): IHighlightResponse {
    this.highlightsService.delete(id);
    return {
        message: 'successful',
        data: null
    }
  }
}
