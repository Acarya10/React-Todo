import React, { useState } from 'react';
import { Input, Button, Container, Title, createStyles, Card, Box, Flex } from '@mantine/core';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const useStyles = createStyles((theme) => ({
  todo: {
    height: '100vh',
    width: '100%',
  },
  todoContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  card: {
    background: 'black',
    width: 600,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
  },
  buttonGroup: {
    display: 'flex',
    marginTop: 10,
    '& > *': {
      marginLeft: 5,
    },
  },
  orangeText: {
    color: 'orange',
  },
  whiteButton: {
    color: 'white',
    backgroundColor: 'transparent',
    border: '1px solid green',
    borderRadius: theme.radius.sm,
    '&:hover': {
      backgroundColor: 'green',
      color: 'black',
    },
  },
  greenButton: {
    color: 'green',
    backgroundColor: 'transparent',
    border: '1px solid white',
    borderRadius: theme.radius.sm,
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    },
  },
  redButton: {
    color: 'red',
    backgroundColor: 'transparent',
    border: '1px solid white',
    borderRadius: theme.radius.sm,
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    },
  },
  strikeThrough: {
    textDecoration: 'line-through',
  },
  logoutButton: {
    color: 'white',
    backgroundColor: 'transparent',
    border: '1px solid red',
    borderRadius: theme.radius.sm,
    marginBottom: '20px',
    '&:hover': {
      backgroundColor: 'red',
      color: 'black',
    },
  },
}));

const useLocalStorage = (key, initialValue) => {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  const initialArray = Array.isArray(initial) ? initial : [];
  const [value, setValue] = useState(initialArray);

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
};

export const Todo = () => {
  const { classes } = useStyles();
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [editTodo, setEditTodo] = useState(null);
  const [todoInput, setTodoInput] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();

  const filteredTodos = todos.filter((todo) =>
    todo.toLowerCase().includes(searchInput.toLowerCase())
  );

  const addTodo = () => {
    if (todoInput.trim() === '') return;

    if (editTodo !== null) {
      const updatedTodos = todos.map((todo, index) => (index === editTodo ? todoInput : todo));
      setTodos(updatedTodos);
      setEditTodo(null);
    } else {
      setTodos([...todos, todoInput]);
    }

    setTodoInput('');
  };

  const editTodoItem = (index) => {
    setEditTodo(index);
    setTodoInput(todos[index]);
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  const completeTodo = (index) => {
    const updatedTodos = todos.map((todo, todoIndex) =>
      todoIndex === index ? `~~${todo}~~` : todo
    );
    setTodos(updatedTodos);
  };

  const handleLogout = () => {
    history.push('/');
    console.log('Logout clicked');
  };

  return (
    <Box className={classes.todo}>
      <Flex className={classes.todoContent}>
        <Button
          onClick={handleLogout}
          className={`${classes.logoutButton} ${classes.orangeText}`}
        >
          Logout
        </Button>
        <Card className={classes.card}>
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ marginBottom: '20px' }}
          >
            <Input
              type="text"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              placeholder="Enter your task"
              style={{ color: 'orange', flex: '1' }}
            />

            <Button
              onClick={addTodo}
              style={{ marginLeft: '10px' }}
              className={`${classes.whiteButton} ${classes.orangeText}`}
            >
              {editTodo !== null ? 'Save' : 'Add'}
            </Button>
          </Flex>

          <Title order={1} className={classes.orangeText}>
            Todo
          </Title>

          <Input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search tasks"
            style={{ marginTop: '10px', color: 'orange' }}
          />

          <ul>
            {filteredTodos.map((todo, index) => (
              <li
                key={index}
                className={`${classes.orangeText} ${
                  todos[index].startsWith('~~') ? classes.strikeThrough : ''
                }`}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: todos[index].startsWith('~~')
                      ? todos[index].replace(/~~/g, '')
                      : todo,
                  }}
                />
                <Flex className={classes.buttonGroup}>
                  <Button
                    onClick={() => editTodoItem(index)}
                    className={`${classes.greenButton} ${classes.whiteButton}`}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => removeTodo(index)}
                    className={`${classes.redButton} ${classes.whiteButton}`}
                  >
                    Remove
                  </Button>
                  <Button
                    onClick={() => completeTodo(index)}
                    className={`${classes.greenButton} ${classes.whiteButton}`}
                  >
                    Complete
                  </Button>
                </Flex>
              </li>
            ))}
          </ul>
        </Card>
      </Flex>
    </Box>
  );
};
