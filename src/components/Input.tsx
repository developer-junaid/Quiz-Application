import React from 'react';
import './../styles/css/input.css';
import { FormControl, InputLabel, Select, MenuItem  } from '@material-ui/core';

const Input = () => {
    return(
        <div className='input-container' >
            <h1>Quiz Settings</h1>
            <form
                 className="question-form"
                 action=""
                //   onSubmit={(e: React.FormEvent<EventTarget>) =>
                //     callback(e, questions, level)
                //   }
             >
            <div className="questions-dropdown">
                <FormControl className='form-control' variant="outlined" fullWidth>
                <InputLabel className='form-label' id="demo-simple-select-outlined-label">
                    Category
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={category}
                    // defaultValue={category}
                    // onChange={(event) => setCategory(Number(event.target.value))}
                    required
                    label="Category"
                >
                    <MenuItem value={9}>General Knowledge</MenuItem>
                    <MenuItem value={11}>Movies</MenuItem>
                    <MenuItem value={17}>Science</MenuItem>
                    <MenuItem value={18}>Computers</MenuItem>
                    <MenuItem value={19}>Mathematics</MenuItem>
                    <MenuItem value={21}>Sports</MenuItem>
                </Select>
                </FormControl>
            </div>
            <div className="questions-dropdown">
                <FormControl className='form-control' variant="outlined" fullWidth>
                <InputLabel className='form-label' id="demo-simple-select-outlined-label">
                    Questions
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={questions}
                    // onChange={(event) => setQuestions(Number(event.target.value))}
                    required
                    label="Questions"
                >
                    <MenuItem value={5}>Five</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={15}>Fifteen</MenuItem>
                </Select>
                </FormControl>
            </div>

            <div className="questions-dropdown">
                <FormControl className='form-control' variant="outlined" fullWidth>
                <InputLabel className='form-label' id="demo-simple-select-outlined-label">
                    Difficulty
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={level}
                    // onChange={(event) => setLevel(event.target.value as string)}
                    required
                    label="Questions"
                >
                    <MenuItem value="easy">Easy</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="hard">Hard</MenuItem>
                </Select>
                </FormControl>
            </div>
            <input className="submit-btn" value="Start Quiz" type="submit" />
        </form>
        </div>
    )
}

export default Input
