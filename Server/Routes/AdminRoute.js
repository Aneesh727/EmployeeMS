import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";
import cors from "cors";

const router = express.Router();

router.post("/adminlogin", (req, res) => {
  const sql = "SELECT * from admin where email = ? and password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) return res.json({ loginstatus: false, Error: "Query error" });
    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: "admin", email: email },
        "jwt_secret_key",
        { expiresIn: "1d" }
      );
      res.cookie("token", token);
      delete result[0]["password"]
      delete result[0]["id"]
      return res.json({data: result[0], loginStatus: true });
    } else {
      return res.json({ loginStatus: false, Error: "Wrong email or password" });
    }
  });
});

router.get("/category", (req, res) => {
  const sql = "SELECT * FROM category";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.post("/add_category", (req, res) => {
  const sql = "INSERT INTO  category (`category_name`) VALUES (?)";
  con.query(sql, [req.body.category], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true });
  });
});

//image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Public/Images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
});
//end image upload

router.post("/add_employee", (req, res) => {
  const sql = `INSERT INTO employee (empId ,designation ,name ,grade ,mobile ,email ,category,dob ,state ,doj ,isActive) VALUES (?)`;

  const values = [
    req.body.empId,
    req.body.designation,
    req.body.name,
    req.body.grade,
    req.body.mobile,
    req.body.email,
    parseInt(req.body.category),
    // req.body.location,
    req.body.dob,
    req.body.state,
    req.body.doj,
    //req.filename.file,
    // req.body.image,
    req.body.isActive,
  ];
  con.query(sql, [values], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true });
  });
});

router.get("/employee", (req, res) => {
  const sql = `SELECT
    e.empId,
    e.designation,
    e.name,
    e.grade,
    e.mobile,
    e.email,
    c.category_name AS category_name,
    e.dob,
    e.state,
    e.doj,
    e.isActive
FROM
    employee e
JOIN
    category c ON e.category = c.category_id`;
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/employee/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM employee WHERE empId = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
  //const empID = req.params.empId
  // const id = req.params.empId;
  // console.log("id: " + id)
  // const sql = "SELECT * FROM employee WHERE empId = " + empId;
  // console.log(sql);
  // con.query(sql,[empId], (err, result) => {
  //     if(err) return res.json({Status: false, Error: "Query Error"})
  //     return res.json({Status: true, Result: result})
  //})
});

router.put("/edit_employee/:id", (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE employee 
        SET designation= ?, name= ?, grade= ?, mobile= ?, email= ?, category= ?, dob= ?, state= ?, doj= ?, isActive=?
        Where empId= ?`;
  const values = [
    req.body.designation,
    req.body.name,
    req.body.grade,
    req.body.mobile,
    req.body.email,
    req.body.category,
    req.body.dob,
    req.body.state,
    req.body.doj,
    req.body.isActive,
  ];
  con.query(sql, [...values, id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.put("/update_employee/:id", (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE employee SET isActive = ? WHERE empId = ?`; 
  // console.log(sql);
  const values = [
    req.body.isActive // Assuming you want to update isActive based on req.body.status
  ];
  con.query(sql, [...values, id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.delete("/delete_employee/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM employee WHERE empId = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

// router.put('working_employee/:id', (req, res) => {
//     const id = req.params.id;
//     const newWorkingStatus = req.body.working
//     const sql = "UPDATE employee SET working =? WHERE empId = ?"
//     con.query(sql, [newWorkingStatus, id], (err,result) => {
//         if(err) return res.json({Status: false, Error: "Query Error" + err})
//         return res.json({Status: true, Result: result})
//     });
// });

router.get("/admin_count", (req, res) => {
  const sql = "SELECT count(id) as admin from admin";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/employee_count", (req, res) => {
  const sql = "SELECT count(empId) as employee from employee";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/branch_count", (req, res) => {
  const sql =
    "SELECT count(empId) as employee from employee WHERE state='Chandigarh' ";
  con.query(sql,(err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

// const jwt = require('jsonwebtoken');

// // Middleware function to verify the token
// function verifyToken(req, res, next) {
//   const token = req.cookies.token || req.headers.authorization;

//   if (!token) {
//     return res.status(403).json({ Status: false, Error: "No token provided" });
//   }

//   jwt.verify(token, 'jwt_secret_key', (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ Status: false, Error: "Failed to authenticate token" });
//     }
//     req.decoded = decoded;
//     next();
//   });
// }

// router.get("/adminC/email", verifyToken, (req, res) => {
//   const email = req.decoded.email; // Extract the email from the decoded token
//   const sql = `
//     SELECT name
//     FROM admin
//     WHERE email = ?;
//   `;
//   con.query(sql, [email], (err, result) => {
//     if (err) return res.json({ Status: false, Error: "Query Error" + err });
//     return res.json({ Status: true, Result: result });
//   });
// });

router.get("/adminC/email", (req, res) => {
  const id = req.params.email;
  const sql =`SELECT name
  FROM admin
  WHERE email = '?';`
    //  "SELECT name FROM employeems.admin WHERE email = 'admin_email' AND password = 'admin_password';"
    // "SELECT name from admin where id=?";
  con.query(sql,[email],(err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

// router.get("/adminC", (req, res) => {
//   const sql = `
//     SELECT name
//     FROM admin;
//   `;
//   con.query(sql, (err, result) => {
//     if (err) return res.json({ Status: false, Error: "Query Error" + err });
//     return res.json({ Status: true, Result: result });
//   });
// });


router.get("/admin_records", (req, res) => {
  const sql = "SELECT * FROM admin";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: true });
});

////////////////////////////////////////////////////////POST MANAGMENT////////////////////////////////////////////////////////////////////////

// router.post('/add_type', (req,res) =>{
//     const sql = `INSERT INTO  type id, sub-type VALUES (?)`;
//     con.query(sql, [req.body.type], (err, result) => {
//         if(err) return res.json({Status: false, Error:"Query Error"})
//         return res.json({Status: true})
//     });
// });



// router.get("/category", (req, res) => {
//   const sql = "SELECT * FROM category";
//   con.query(sql, (err, result) => {
//     if (err) return res.json({ Status: false, Error: "Query Error" });
//     return res.json({ Status: true, Result: result });
//   });
// });

// router.post("/add_category", (req, res) => {
//   const sql = "INSERT INTO  category (`category_name`) VALUES (?)";
//   con.query(sql, [req.body.category], (err, result) => {
//     if (err) return res.json({ Status: false, Error: "Query Error" });
//     return res.json({ Status: true });
//   });
// });


// router.get("/post_type", (req, res) => {
//   const sql = "SELECT * FROM subtype";
//   con.query(sql, (err, result) => {
//     if (err) return res.json({ Status: false, Error: "Query Error" });
//     return res.json({ Status: true, Result: result });
//   });
// });

// router.post("/add_post_type", (req, res) => {
//   const sql = "INSERT INTO subtype (`subtype`) VALUES (?)";
//   con.query(sql, [req.body.posttype], (err, result) => {
//     if (err) return res.json({ Status: false, Error: "Query Error" });
//     return res.json({ Status: true });
//   });
// });



// router.get("/post_type", (req, res) => {
//   const sql = "SELECT * FROM posttype";
//   con.query(sql, (err, result) => {
//     if (err) return res.json({ Status: false, Error: "Query Error" });
//     return res.json({ Status: true, Result: result });
//   });
// });

// router.post("/add_sub_type", (req, res) => {
//   const sql = "INSERT INTO  posttype (`type`) VALUES (?)";
//   con.query(sql, [req.body.subtype], (err, result) => {
//     if (err) return res.json({ Status: false, Error: "Query Error" });
//     return res.json({ Status: true });
//   });
// });


router.post("/addpost", (req, res) => {

  const sql = `INSERT INTO post (posttype ,subtype ,title ,post ,descript, date) VALUES (?)`;

  const values = [
    req.body.posttype,
    req.body.subtype,
    req.body.title,
    req.body.post,
    req.body.descript, 
    req.body.date,
  ];
  con.query(sql, [values], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true });
  });
});



router.get("/post", (req, res) => {
  const sql = `SELECT * from post`;
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});


router.get("/post/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM post WHERE post_id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/gold", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Gold'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});


router.get("/post_gold", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Gold' and subtype='Post' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/news_gold", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Gold' and subtype='News' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/circular_gold", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Gold' and subtype='Circular' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/notice_gold", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Gold' and subtype='Notice' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});


router.get("/insurance", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Insurance'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});


router.get("/notice_insurance", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Insurance' and subtype='Notice' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});


router.get("/post_insurance", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Insurance' and subtype='Post' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});


router.get("/circular_insurance", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Insurance' and subtype='Circular' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/news_insurance", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Insurance' and subtype='News' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});


router.get("/forex", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Forex'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});


router.get("/notice_forex", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Forex' and subtype='Notice' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});


router.get("/post_forex", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Forex' and subtype='Post' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});


router.get("/circular_forex", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Forex' and subtype='Circular' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/news_forex", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Forex' and subtype='News' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});


router.get("/travel", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Travel'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});


router.get("/notice_travel", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Travel' and subtype='Notice' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});


router.get("/post_travel", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Travel' and subtype='Post' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});


router.get("/circular_travel", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Travel' and subtype='Circular' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/news_travel", (req, res) => {
  const sql =
    "SELECT  * from post WHERE posttype='Travel' and subtype='News' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});
router.get("/notification", (req,res) => {
  const sql="Select posttype, subtype, title, descript from post ORDER BY date DESC LIMIT 1 ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
})



router.get("/post/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM post WHERE post_id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
 
});

router.put("/edit_post/:id", (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE post 
        SET posttype= ?, subtype= ?, title= ?, post= ?, descript= ? 
        Where post_id= ?`;
  const values = [
    req.body.posttype,
    req.body.subtype,
    req.body.title,
    req.body.post,
    req.body.descript,
    req.body.date,
  ];
  con.query(sql, [...values, id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.delete("/delete_post/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM post WHERE post_id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

//Graph for annualreport

//GOLDANNUAL
router.get("/goldpost", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Gold' and subtype='Post'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/goldnews", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Gold' and subtype='News'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/goldnotice", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Gold' and subtype='Notice'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/goldcircular", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Gold' and subtype='Circular'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

// FOREXANNUAL
router.get("/forexpost", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Forex' and subtype='Post'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/forexnews", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Forex' and subtype='News'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/forexnotice", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Forex' and subtype='Notice'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/forexcircular", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Forex' and subtype='Circular'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

//INSURANCEANNUAL
router.get("/insurancepost", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Insurance' and subtype='Post'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/insurancenews", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Insurance' and subtype='News'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/insurancenotice", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Insurance' and subtype='Notice'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/insurancecircular", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Insurance' and subtype='Circular'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});



//TRAVELANNUAL
router.get("/travelpost", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Travel' and subtype='Post'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/travelnews", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Travel' and subtype='News'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/travelnotice", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Travel' and subtype='Notice'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/travelcircular", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Travel' and subtype='Circular'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

//GENERALANNUAL
router.get("/generalpost", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='General' and subtype='Post'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/generalnotice", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='General' and subtype='Notice'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/generalnews", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='General' and subtype='News'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/generalcircular", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='General' and subtype='Circular'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});



//Graph for monthlyreport
//GOLDMONTHLY
router.get("/goldpostmonthly", (req, res) => {
  const sql =
    "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Gold' AND subtype='Post' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/goldnewsmonthly", (req, res) => {
  const sql =
    "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Gold' AND subtype='News' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/goldnoticemonthly", (req, res) => {
  const sql =
    "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Gold' AND subtype='Notice' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/goldcircularmonthly", (req, res) => {
  const sql =
    "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Gold' AND subtype='Circular' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

//FOREXMONTHLY
router.get("/forexpostmonthly", (req, res) => {
  const sql = "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Forex' AND subtype='Post' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Forex' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/forexnewsmonthly", (req, res) => {
  const sql = "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Forex' AND subtype='News' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Forex' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/forexnoticemonthly", (req, res) => {
  const sql = "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Forex' AND subtype='Notice' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Forex' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/forexcircularmonthly", (req, res) => {
  const sql = "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Forex' AND subtype='Circular' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Forex' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

//INSURANCEMONTHLY
router.get("/insurancepostmonthly", (req, res) => {
  const sql = "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Insurance' AND subtype='Post' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Insurance' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/insurancenewsmonthly", (req, res) => {
  const sql = "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Insurance' AND subtype='News' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Insurance' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/insurancenoticemonthly", (req, res) => {
  const sql = "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Insurance' AND subtype='Notice' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Insurance' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/insurancecircularmonthly", (req, res) => {
  const sql = "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Insurance' AND subtype='Circular' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Insurance' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});


//TRAVELMONTHLY
router.get("/travelpostmonthly", (req, res) => {
  const sql = "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND subtype='Post' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/travelnewsmonthly", (req, res) => {
  const sql = "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND subtype='News' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/travelnoticemonthly", (req, res) => {
  const sql = "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND subtype='Notice' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/travelcircularmonthly", (req, res) => {
  const sql = "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND subtype='Circular' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

//GENERALMONTHLY
router.get("/generalpostmonthly", (req, res) => {
  const sql = "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'General' AND subtype='Post' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/generalnoticemonthly", (req, res) => {
  const sql = "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'General' AND subtype='Notice' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/generalnewsmonthly", (req, res) => {
  const sql = "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'General' AND subtype='News' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/generalcircularmonthly", (req, res) => {
  const sql = "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'General' AND subtype='Circular' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});



//Graph for weeklyreport
//GOLDWEEKLY
router.get("/goldpostweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'Gold' and subtype='Post' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/goldnewsweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'Gold' and subtype='News' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/goldnoticeweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'Gold' and subtype='Notice' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/goldcircularweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'Gold' and subtype='Circular' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

//FOREXWEEKLY
router.get("/forexpostweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'Forex' and subtype='Post' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/forexnewsweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'Forex' and subtype='News' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/forexnoticeweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'Forex' and subtype='Notice' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/forexcircularweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'Forex' and subtype='Circular' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

//INSURANCEWEEKLY
router.get("/insurancepostweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'Insurance' and subtype='Post' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/insurancenewsweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'Insurance' and subtype='News' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/insurancenoticeweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'Insurance' and subtype='Notice' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/insurancecircularweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'Insurance' and subtype='Circular' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});
//TRAVELWEEKLY
router.get("/travelpostweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'Travel' and subtype='Post' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/travelnewsweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'Travel' and subtype='News' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/travelnoticeweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'Travel' and subtype='Notice' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/travelcircularweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'Travel' and subtype='Circular' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

//GENERALWEEKLY
router.get("/generalpostweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'General' and subtype='Post' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/generalnoticeweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'General' and subtype='Notice' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/generalnewsweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'General' and subtype='News' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/generalcircularweekly", (req, res) => {
  const sql = "SELECT count(posttype) AS post from post WHERE posttype = 'General' and subtype='Circular' and post.date >= DATE_SUB(NOW(), INTERVAL DAYOFWEEK(NOW()) - 1 DAY) AND post.date < NOW()"
  // "SELECT COUNT(posttype) AS post FROM post WHERE posttype = 'Travel' AND post.date >= DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH), INTERVAL 1 DAY) AND post.date <= NOW()"
    // "SELECT count(posttype) as post from post WHERE posttype='Travel' and post.date >=DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 MONTH)), INTERVAL 1 DAY) and t.date <= DATE_SUB(NOW(), INTERVAL 1 MONTH)"
    // "SELECT DAYOFMONTH(date), count(posttype) from Post WHERE MONTH(date) ='2' "
    // "SELECT (posttype) as post from post WHERE posttype='Forex' ";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});


// PIE-CHART ANNUAL

router.get("/goldannual", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Gold'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});


router.get("/forexannual", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Forex'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/insuranceannual", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Insurance'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/travelannual", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='Travel'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/generalannual", (req, res) => {
  const sql =
    "SELECT count(posttype) as post from post WHERE posttype='General'";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

// router.get("/total", (req, res) => {
//   const sql =
//     "SELECT count(post_id) as posts from post";
//   con.query(sql, (err, result) => {
//     if (err) return res.json({ Status: false, Error: "Query Error" + err });
//     return res.json({ Status: true, Result: result });
//   });
// });
















































































































// router.stat('/stat_employee/:id', (req, res) => {
//     const id = req.params.id;
//     //const sql = "DELETE FROM employee WHERE empId = ?"
//     con.query(sql, [id], (err,result) => {
//         if(err) return res.json({Status: false, Error: "Query Error" + err})
//         return res.json({Status: true, Result: result})
//     })
// })

// router.post('/add_employee', async(req,res) => {
//     const sql = `INSERT INTO  employee (empId, desg, name, grade, mobile, category_id, email, location, dob, State, doj, image)
//     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//     const values = [
//         req.body.empId,
//         req.body.desg,
//         req.body.name,
//         req.body.grade,
//         req.body.mobile,
//         req.body.category,
//         req.body.email,
//         req.body.location,
//         req.body.dob,
//         req.body.State,
//         req.body.doj,
//         req.body.image,
//     ];

//     });
//  }

export { router as adminRouter };
