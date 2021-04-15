module.exports = { login, calc, step1, step2, step3, step4, config };

const appConfig = require('./app-config.json');

const DEFAULT_CREDENTIALS = {
    username: "john",
    password: "pass",
};

function config(req, res) {
    if (req.body) {
        res.json(appConfig);
    } else {
        res.status(500).send({ message: "Some kind of error" });
    }
}

function login(req, res) {
    const { username, password } = req.body;
    if (
        username === DEFAULT_CREDENTIALS.username &&
        password === DEFAULT_CREDENTIALS.password
    ) {
        res.json(true);
    } else {
        res.status(500).send({ message: "Wrong credentials" });
    }
}

function calc(req, res) {
    if (req.body) {
        console.log(req.body);
        res.json(true);
    } else {
        res.status(500).send({ message: "Some kind of error" });
    }
}

function step1(req, res) {
    if (req.body) {
        console.log(req.body);
        res.json(true);
    } else {
        res.status(500).send({ message: "Some kind of error" });
    }
}

function step2(req, res) {
    if (req.body) {
        res.json(true);
    } else {
        res.status(500).send({ message: "Some kind of error" });
    }
}

function step3(req, res) {
    if (req.body) {
        res.json(true);
    } else {
        res.status(500).send({ message: "Some kind of error" });
    }
}

function step4(req, res) {
    if (req.body) {
        res.json(true);
    } else {
        res.status(500).send({ message: "Some kind of error" });
    }
}