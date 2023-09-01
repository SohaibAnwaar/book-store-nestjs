import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'customTags', async: false })
export class CustomTags implements ValidatorConstraintInterface {
  validate(tags: string[], args: ValidationArguments) {
    let isValid = true;
    const validTags = ['fiction', 'non-fiction', 'science', 'essay'];
    tags.forEach((tag) => {
      if (!validTags.includes(tag)) {
        isValid = false;
      }
    });
    return isValid;
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return 'Tags must be one of ”fiction”, “non-fiction”, “science”, “essay”';
  }
}
