import mysql from "mysql2";

var pool;

const connectToDB = async () => {
  pool = mysql
    .createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    })
    .promise();

  // await pool.query(`CREATE DATABASE ${process.env.MYSQL_DATABASE};`);

  // await pool.query(`
  // CREATE TABLE banner_details (
  //     id INT PRIMARY KEY,
  //     title VARCHAR(255) NOT NULL,
  //     description TEXT NOT NULL,
  //     duration TIME NOT NULL,
  //     bannerUrl VARCHAR(255) NOT NULL,
  //     showBanner BOOLEAN NOT NULL DEFAULT TRUE
  // );
  // `);

  console.log("Connected to MySQL DB");
};

const getBannerDetails = async () => {
  const [result] = await pool.query("SELECT * FROM banner_details where id=1");
  return result[0];
};

const updateBannerDetails = async (bannerDetails) => {
  const { title, description, duration, bannerUrl, showBanner, closable } =
    bannerDetails;
  const query = `
    UPDATE banner_details
    SET
        title = '${title}',
        description = '${description}',
        duration = '${duration}',
        bannerUrl = '${bannerUrl}',
        showBanner = '${showBanner}',
        closable = '${closable}'
    WHERE id = 1;
    `;

  await pool.query(query);
  return;
};

export { connectToDB, getBannerDetails, updateBannerDetails };
