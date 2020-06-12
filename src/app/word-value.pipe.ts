import { Pipe, PipeTransform } from '@angular/core'
import letterValues from './word-values'

@Pipe ({
  name: 'calculateScore'
})

export class CalculateScorePipe implements PipeTransform {
  transform(letters: string): any {

    let tally = 0;

    letters.split('').forEach(letter => {
      letterValues.forEach(letterValue => {
        if (letterValue.letter === letter) {
          tally = tally + letterValue.value
        }
      })
    })
    return tally;
}
}
