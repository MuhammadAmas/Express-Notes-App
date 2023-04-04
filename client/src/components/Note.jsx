import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Note() {

    return <>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {
                    // m: "1.5 0",
                    // width: '60ch'
                },
                width: '50%',
                margin: '3em auto',
            }}
            noValidate
            autoComplete="off"
        >
            <Stack spacing={2} direction="column">
                <TextField
                    id="outlined-multiline-flexible"
                    label="Title"
                    multiline
                    maxRows={4}
                    placeholder='Write your title here...'
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Note"
                    multiline
                    rows={4}
                    defaultValue=""
                    placeholder='Write your Note here...'
                />

                <div>
                    <Button variant="contained" margin="0 14px"
                        sx={{
                            m: "1.5 0", width: '100%'
                        }}>Add Note</Button>
                </div>
            </Stack>
        </Box>
    </>
}