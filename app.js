function palindrome(str) {
  for (let i = 0; i < str.length; i++){
 if (str[i] < 'A' || str[i] > 'Z' &&
                    str[i] < 'a' || str[i] > 'z')
            {
                   
                // erase function to erase
                // the character
                str = str.substring(0, i) + str.substring(i + 1);
                i--;
            }
  }
  return true;
}

palindrome("eye");