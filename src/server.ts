import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

// mongodb atlas ========
// saddam07
// 5t7lsfbTkS00NIAM

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
