import { Grid, Typography } from "@mui/material";
import React from "react";
import { CustomButton, CustomInput } from "..";
import { FormData } from "./FormData";
import FileBase from "react-file-base64";
export default function Form() {
  const { formData, handleInputChange, handleFormClear, setFormData } =
    FormData();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormClear();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Typography
          variant="h6"
          gutterBottom
          style={{ fontWeight: "bold", fontSize: 20 }}
        >
          Your lifying
        </Typography>
      </div>
      <Grid container spacing={3}>
        <CustomInput
          label="Title"
          value={formData.title}
          name="title"
          onChange={handleInputChange}
        />
        <CustomInput
          label="Message"
          value={formData.message}
          name="message"
          onChange={handleInputChange}
        />
        <CustomInput
          label="Creator"
          value={formData.creator}
          name="creator"
          onChange={handleInputChange}
        />
        <CustomInput
          label="Tags"
          value={formData.tags}
          name="tags"
          onChange={handleInputChange}
        />
        <div style={{ marginTop: "2%" }}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setFormData({ ...formData, selectedFile: base64 })
            }
          />
        </div>
        <CustomButton text="Submit" />
      </Grid>
    </form>
  );
}
