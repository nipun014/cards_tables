import React, { useState } from 'react';
import Navbar from './Navbar';
import { Button, TextField } from '@mui/material';

const Addnew = () => {
  const [heading, setHeading] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { heading, image, body });
  };

  return (
    <div>
     
      <div className="container">
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: '#d8d8f6', // Light background
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            width: '90%',
            maxWidth: '600px',
            margin: 'auto',
            marginTop: '20px', // Add top margin for spacing
          }}
        >
          <div className="heading">
            <TextField
              id="Category"
              label="Category"
              variant="outlined"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              fullWidth
              InputProps={{
                sx: {
                  bgcolor: '#d8d8f6', // Light background
                  borderRadius: '0.5rem',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#494850', // Subtle border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#494850',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#494850',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#2c2c34', // Dark text color
                  },
                  '& .MuiFormLabel-root': {
                    color: '#978897', // Placeholder text color
                  },
                },
              }}
            />
          <TextField
              id="Title"
              label="Title"
              variant="outlined"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              fullWidth
              InputProps={{
                sx: {
                  bgcolor: '#d8d8f6', // Light background
                  borderRadius: '0.5rem',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#494850', // Subtle border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#494850',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#494850',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#2c2c34', // Dark text color
                  },
                  '& .MuiFormLabel-root': {
                    color: '#978897', // Placeholder text color
                  },
                },
              }}
            />
            
            <TextField
              id="Price"
              label="Price"
              variant="outlined"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              fullWidth
              InputProps={{
                sx: {
                  bgcolor: '#d8d8f6', // Light background
                  borderRadius: '0.5rem',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#494850', // Subtle border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#494850',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#494850',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#2c2c34', // Dark text color
                  },
                  '& .MuiFormLabel-root': {
                    color: '#978897', // Placeholder text color
                  },
                },
              }}
            />
          </div>
          <div className="image">
            <TextField
              id="image"
              label="Image URL"
              variant="outlined"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              fullWidth
              InputProps={{
                sx: {
                  bgcolor: '#d8d8f6', // Light background
                  borderRadius: '0.5rem',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#494850', // Subtle border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#494850',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#494850',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#2c2c34', // Dark text color
                  },
                  '& .MuiFormLabel-root': {
                    color: '#978897', // Placeholder text color
                  },
                },
              }}
            />
          </div>
          
          
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: '#978897', // Primary button background
              color: '#d8d8f6', // Light text color
              border: '1px solid #494850', // Subtle border
              '&:hover': {
                bgcolor: '#bc8fcf', // Hover background
                color: '#d8d8f6', // Hover text color
              },
              marginTop: '20px', // Spacing below body field
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Addnew;
