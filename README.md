jLockable
=========

jLockable is an extremly lightweight lockable variable class for javascript.

Usage
=========

Creation
---------
Creating a new lockable is very easy. Simply use the following syntax:

> var lockable = new jLockable(&lt;default value&gt;);

- default value: The value you want the lockable to be initialized with.

Value
---------
To access or set the value of the variable, use the "value" property on the jLockable object.

> var currentValue = lockable.value;
> lockable.value = 5;

- Note: if the variable is locked, it will not accept / retain a new value until unlocked.

Locking
---------
To lock the variable value, there are two options. The first method, the simplest uses the following syntax:

> lockable.Lock(&lt;function: onUnlock&gt;);

- (Optional) onUnlock: The function you want to have run upon the variable be unlocked.

The second way to lock the value allows for you to specify an amount of time you want it locked for:

> lockable.LockFor(&lt;integer: time&gt;, &lt;function: onUnlock&gt;);

- time: Amount of time in milliseconds you want the variable to be locked for.
- (Optional) onUnlock: The function you want to have run upon the variable be unlocked.

Unlocking
---------
To unlock the variable value to allow for editing use the following:

> lockable.UnLock();
