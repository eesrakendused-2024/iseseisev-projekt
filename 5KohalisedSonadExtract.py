
def is_valid_word(word):
    allowed_chars = set('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    if len(word) == 5 and all(char in allowed_chars for char in word):
        return True
    else:
        return False

def print_five_letter_words(file_name):
    try:
        with open("C:/Users/Hannes/Desktop/ProgeKool/lemmad.txt", 'r') as file:
            five_letter_words = []
            for line in file:
                words = line.split()
                for word in words:
                    if is_valid_word(word):
                        five_letter_words.append(word)
            print(five_letter_words)
    except FileNotFoundError:
        print("File not found.")


print_five_letter_words('file.txt')
