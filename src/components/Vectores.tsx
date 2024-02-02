import React, { useState } from 'react';
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  background-color: #e9f2f9;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.View`
  flex: 0;
  border-width: 3;
  border-color: black;
  padding: 20px;
  margin: 10px;
  font-size: 16px;
`;

const Button = styled.TouchableOpacity`
  background-color: #3a89c9;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
`;

const Text = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const App: React.FC = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    const [evenNumbers, setEvenNumbers] = useState([]);
    const [oddNumbers, setOddNumbers] = useState([]);

    const classifyNumbers = () => {
        const evens = numbers.filter((num) => num % 2 === 0);
        const odds = numbers.filter((num) => num % 2 !== 0);
        setEvenNumbers(evens);
        setOddNumbers(odds);
    };

    return (
        <Container>
            <Text>Bienvenido</Text>
            <Box>Vector: {numbers.join(', ')}</Box>
            <Button onPress={classifyNumbers}>
                <Text>Clasificar</Text>
            </Button>
            <Box>Pares: {evenNumbers.join(', ')}</Box>
            <Box>Impares: {oddNumbers.join(', ')}</Box>
        </Container>
    );
};

export default App;
