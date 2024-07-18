import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import userSchema from "../../database/models/user.model.js";

const signIn = async (req, res) => {
  let { userName, password } = req.body;


  let isExist = await userSchema.findOne({ where: { userName } });
  
  if (isExist && bcrypt.compareSync(password, isExist.password)) {
    
    let token = jwt.sign({id: isExist.id , role:isExist.role}, 'mySecretToken')

    res.json({ message: "welcome" , token});

  } else {
    res.json({ message: "wrong userName or password" });
  }
};

const signup = async (req, res) => {
  let { userName, password } = req.body;

  await userSchema.create({ userName, password });

  res.json({meassge:"user created successfully"});
};

export default { signIn, signup };
