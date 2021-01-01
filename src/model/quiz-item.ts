/*
 * Copyright © Live-Poll 2020-2021. All rights reserved
 */

import {PollItem} from './poll-item';
import {Answer} from './answer';

/**
 * QuizItem class.
 * Represents a quiz question. Quiz questions can have multiple possible answers.
 */
export class QuizItem extends PollItem {
  answers: Answer[];
}
