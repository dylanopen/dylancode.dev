# Encryption

> **Encryption** is a method of encoding data in a way that only *authorised*
> users can access it.

The basic idea is that we take our original data, called *plaintext*, and we use
a maths function, called an *encryption algorithm*, to transform that plaintext
into a new form, called *ciphertext*, which is unreadable to anyone who doesn't
have the key to [decrypt](/decryption) it.  
Sometimes we call this encryption algorithm the [**cipher**](/cipher).

> Importantly, only the intended recipient of the data should have the *key*
> to decrypt it.

## Why use encryption?

When we send data over the internet, anybody along the route of the 'packet' of
data can read its contents.

It's often important that we send data *privately* - things like passwords, card
details, messages, etc. - so that only the intended person is able to read it!
