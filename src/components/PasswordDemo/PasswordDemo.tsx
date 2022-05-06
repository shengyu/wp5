import { Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';

export default function PasswordDemo() {
  const [score, setScore] = useState<number>(0);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const temp = zxcvbn(event.currentTarget.value).score;
    setScore(temp);
  };

  return (
    <div>
      <Input onChange={handleChange}></Input>
      <Heading color="green.400">{score}</Heading>
    </div>
  );
}
