
# models/users.go
const userPwPepper = "lDS3aue165e3"
const hmacSecretKey = "secret-hmac-key"

# models/services.go
db, err := gorm.Open("postgres", connectionInfo)
//...
db.LogMode(true)