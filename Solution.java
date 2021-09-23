
public class Solution {

    public String breakPalindrome(String palindrome) {

        if (palindrome.length() == 1) {
            return "";
        }

        int halfLength = palindrome.length() / 2;
        char[] letters = palindrome.toCharArray();

        for (int i = 0; i < halfLength; i++) {
            if (letters[i] != 'a') {
                letters[i] = 'a';
                return String.valueOf(letters);

            }
        }

        letters[palindrome.length() - 1] = 'b';
        return String.valueOf(letters);
    }
}
