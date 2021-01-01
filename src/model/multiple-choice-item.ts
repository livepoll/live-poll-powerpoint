/*
 * Copyright © Live-Poll 2020-2021. All rights reserved
 */

import {PollItem} from './poll-item';
import {Answer} from './answer';

/**
 * MultipleChoiceItem class.
 * Represents a multiple choice question, which can have several possible answers.
 */
export class MultipleChoiceItem extends PollItem {
  answers: Answer[];
}
