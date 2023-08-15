import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton, Input, List, ListItem, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'; // Install this library

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    setHistory(storedHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(history));
  }, [history]);

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      setHistory([...history, searchTerm]);
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  const uniqueHistory = [...new Set(history)];

  const handleSuggestionClick = (item) => {
    setSearchTerm(item);
    navigate(`/search/${item}`);
  };

  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleVoiceSearch = () => {
    if (transcript) {
      setSearchTerm(transcript);
      navigate(`/search/${transcript}`);
      resetTranscript();
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 400,
        margin: '20px auto',
      }}
    >
      <Paper
        component="form"
        onSubmit={onhandleSubmit}
        sx={{
          borderRadius: 20,
          border: '1px solid #e3e3e3',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Input
          className="search-bar"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            border: 'none',
            flex: 1,
            p: '8px 16px',
            outline: 'none',
            '&:focus': {
              outline: 'none',
            },
          }}
        />
        <IconButton sx={{ p: '10px', color: 'red' }} aria-label="search" onClick={onhandleSubmit}>
          <SearchIcon />
        </IconButton>
        <IconButton sx={{ p: '10px' }} aria-label="voice search" onClick={SpeechRecognition.startListening}>
          <MicIcon />
        </IconButton>
      </Paper>
      {searchTerm && (
        <List
          sx={{
            position: 'absolute',
            zIndex: 1,
            backgroundColor: '#000',
            color: '#fff',
            width: 'calc(100% + 16px)',
            top: 'calc(100% + 2px)',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {uniqueHistory.map((item, index) => (
            <ListItem key={index} button onClick={() => handleSuggestionClick(item)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default SearchBar;
