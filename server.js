const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001;

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'src')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});