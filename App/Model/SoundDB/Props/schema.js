
const SoundscapeSchema = {
    schema: {
      id: {
        type: 'integer',
        info: 'primarykey',
      },
      datetime: {
        type: 'text',
        info: 'recording datetime',
      },
      path: {
        type: 'text',
        info: 'sounds file path',
      },
      filename: {
        type: 'text',
        info: 'sound file name',
      },
      description: {
        type: 'text',
        info: 'survey description',
      },
      duration: {
        type: 'text',
        info: 'recording length length',
      },
      location: {
        type: 'not',
        info: 'recording latlong',
      },
      emotion: {
        type: 'text',
        info: ' survey emo tags',
      },
      biophony: {
        type: 'text',
        info: 'survey bio tags',
      },
      geophony: {
        type: 'text',
        info: 'survey geo tags',
      },
      anthrophony: {
        type: 'text',
        info: 'survey man tags',
      },
      cultural: {
        type: 'text',
        info: 'survey culture tags',
      },
      pid: {
        type: 'text',
        info: 'id from recordtheearth website',
      },
      isUploaded: {
        type: 'bool',
        info: 'is the file uploaded',
      },
    },
  };

  export { SoundscapeSchema };
