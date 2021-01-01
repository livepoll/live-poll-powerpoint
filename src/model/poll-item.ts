/*
 * Copyright © Live-Poll 2020-2021. All rights reserved
 */

/**
 * PollItem class.
 * Represents a question / poll item within a poll. It holds the question itself and a position for ordering the questions.
 */
export class PollItem {
  id: number;
  question: string;
  pos: number;
  type: ItemType;
}

/**
 * Item type enumeration.
 * Represents the type of a poll item.
 */
export enum ItemType {
  MultipleChoice = 'MultipleChoiceItem',
  Quiz = 'QuizItem',
  OpenText = 'OpenTextItem',
  WordCloud = 'WordCloudItem',
  Rating = 'RatingItem'
}
