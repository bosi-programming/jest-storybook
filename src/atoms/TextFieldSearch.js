import React from 'react';

import { IconButton, InputAdornment } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';

import TextField from './TextField';

const TextFieldSearch = ({ InputProps, onChange, ...rest }) => (
  <TextField
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon fontSize={rest.size === 'small' ? 'small' : undefined} />
        </InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end">
          {!!rest.value && (
            <IconButton onClick={() => onChange('')}>
              <CloseIcon fontSize={rest.size === 'small' ? 'small' : undefined} />
            </IconButton>
          )}
        </InputAdornment>
      ),
      ...InputProps,
    }}
    onChange={(event) => onChange(event.target.value)}
    {...rest}
  />
);

export default TextFieldSearch;
